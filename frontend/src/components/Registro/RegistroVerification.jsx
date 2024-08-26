import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import loading from "../../assets/load3.gif";
import Select from "react-select";
import country from "../../assets/country.svg";
import email from "../../assets/email.svg";
import person from "../../assets/person.svg";
import phone from "../../assets/phone.svg";
import countries from "./countries";
import { useHistory } from "react-router-dom";
import "./Registro.css";
import { FaWhatsapp } from "react-icons/fa6";

const RegistroVerification = ({
  actualizarEstado,
  redirectUrl,
  googleSheetsUrl,
}) => {
  const formRef = useRef(null);
  const history = useHistory();
  const [registro, setRegistro] = useState({
    FNAME: "",
    EMAIL: "",
    PHONE: "",
    CountryCode: null,
    Country: "",
    DATE: new Date().toLocaleString(),
    verificationCodeInput: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCode, setIsLoadingCode] = useState(false);
  const [verificationCode, setVerificationCode] = useState(null); 
  const [errors, setErrors] = useState({
    FNAME: "completar con su nombre",
    EMAIL: "completar email",
    PHONE: "colocar su numero",
    countryCode: "colocar Country Code",
    verificationCodeInput: "Ingresa el código de verificación",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
    setVerificationCode(randomCode);
    console.log("Generated Verification Code: ", randomCode);
  }, []);

  const validatePhoneNumber = () => {
    const { CountryCode, PHONE } = registro;
  
    // Validación para Argentina (\\\+549)
    if (CountryCode === "+549") {
      // Argentina: debe tener entre 10 y 11 dígitos, sin incluir el "9" antes del código de área
      const argentinaPhoneRegex = /^\d{10,11}$/;
      return argentinaPhoneRegex.test(PHONE);
    }
  
    // Validación general para otros países (mínimo 7 dígitos)
    const generalPhoneRegex = /^\d{7,}$/;
    return generalPhoneRegex.test(PHONE);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegistro((prevRegistro) => ({
      ...prevRegistro,
      [name]: value,
    }));

    validate({ ...registro, [name]: value });
  };

  const validate = (registro) => {
    let errors = {};
    if (!registro.FNAME) {
      errors.FNAME = "Llenar con su nombre";
    }
    if (!registro.EMAIL) {
      errors.EMAIL = "Debes ingresar un email.";
    }
    if (registro.EMAIL) {
      const emailRegex =
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if (!emailRegex.test(registro.EMAIL)) {
        errors.EMAIL = "El email ingresado no es válido";
      }
    }
    if (!registro.PHONE) {
      errors.PHONE = "Debe ingresar su número de celular.";
    }
    if (registro.PHONE) {
      const phoneRegex = /^\d{8,10}$/;

      if (!phoneRegex.test(registro.PHONE)) {
        errors.PHONE = "Debe ingresar un número válido";
      }
    }
    if (!registro.CountryCode) {
      errors.PHONE = "Debe ingresar el código de su país.";
    }
    if (!registro.CountryCode && !registro.PHONE) {
      errors.PHONE =
        "Debe ingresar el código de su país y su número de celular.";
    }
    setErrors(errors);
  };

  const handleSendVerificationCode = async () => {
    const { CountryCode, PHONE } = registro;
    
    if (!CountryCode || !PHONE) {
      alert("Por favor, ingresa el código de país y un número de teléfono completo.");
      return;
    }
    
    // Validar el formato del número de teléfono
    if (!validatePhoneNumber()) {
      alert("El número de teléfono ingresado no es válido. Por favor, verifica el número.");
      return;
    }
    
    const phoneNumber = `${CountryCode}${PHONE}`;
    
    setIsLoadingCode(true); 
  
    try {
      const response = await axios.post(
        "https://saksa-production.up.railway.app/send-verification",
        {
          phoneNumber,
          verificationCode,
        }
      );
    
      if (response.data.res === true) {
        alert("Código enviado. Revisa tu WhatsApp e ingresa el código.");
      } else {
        alert(
          "Error al enviar el código. Por favor, verifica tu número de teléfono y código de país."
        );
      }
    } catch (error) {
      console.error("Error al enviar el código de verificación", error);
      alert("Hubo un error al intentar enviar el código.");
    } finally {
      setIsLoadingCode(false); 
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    validate(registro);

    if (registro.verificationCodeInput !== verificationCode) {
      alert("El código ingresado es incorrecto.");
      return;
    }

    if (Object.keys(errors).length === 0) {
      setIsLoading(true);

      const formDatab = new FormData();
      for (const key in registro) {
        formDatab.append(key, registro[key]);
      }

      try {
        await fetch(googleSheetsUrl, {
          method: "POST",
          body: formDatab,
          mode: "no-cors",
        });

        const mailchimpForm = formRef.current;
        const formData = new FormData(mailchimpForm);

        await fetch(mailchimpForm.action, {
          method: mailchimpForm.method,
          body: formData,
          mode: "no-cors",
        });

        // Guardar en localStorage que el usuario se ha registrado
        localStorage.setItem("isRegistered", "true");
        window.location.href = `https://www.revolutionoficial.com${redirectUrl}&email=${registro.EMAIL}&phone=${registro.CountryCode}${registro.PHONE}`;
        setRegistro({
          FNAME: "",
          EMAIL: "",
          PHONE: "",
          CountryCode: null,
          Country: "",
          verificationCodeInput: "",
          DATE: new Date().toLocaleString(),
        });
        setIsLoading(false);
        actualizarEstado(false);
        
        // history.push(redirectUrl);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    } else {
      setFormSubmitted(true);
    }
  };

  const handleClick = (click) => {
    actualizarEstado(click);
  };

  const selectedCountry = countries.find(
    (country) => country.code === registro.CountryCode
  );

  const getPhoneExample = () => {
    if (selectedCountry) {
      if (selectedCountry.code === "+549") {
        return "Ejemplo: 3815588985 (con el código de área de tu provincia)";
      }
      return "Ejemplo: 1234567890 (sin el código de país)";
    }
    return "Selecciona un país para ver el ejemplo";
  };

  return (
    <div className="max-w-[1100px] flex items-center justify-center">
      <div className="max-w-[700px] p-4 bg-white rounded-lg shadow-lg overflow-auto max-h-[700px] relative">
        <button
          className="bg-gray-500 hover:bg-gray-700 transition duration-300 ease-in-out text-white font-semibold text-sm py-1 px-2 rounded absolute top-0 right-0 mt-2 mr-2"
          onClick={() => handleClick(false)}
        >
          X
        </button>
        <h1 className="text-lg md:text-2xl lato-black font-semibold text-center text-gray-900 mt-4 mb-2 text-balance">
          Ingresa tus datos para ver la Masterclass de este nuevo Modelo de Negocio Online
        </h1>
        <form
          className="max-w-[400px] sm:max-w-[700px] mx-auto"
          action="https://revolutionoficial.us13.list-manage.com/subscribe/post?u=8449426f8fafa7d818754f177&amp;id=8098f80fd7&amp;f_id=000e67e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <div className="mb-2">
            <input
              type="text"
              id="FNAME"
              name="FNAME"
              value={registro.FNAME}
              onChange={handleChange}
              placeholder="Ingresa tu Nombre y Apellido"
              className="input-f h-[40px] w-full px-4 pl-10 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
              style={{
                backgroundImage: `url(${person})`,
                backgroundSize: "25px 25px",
                backgroundPosition: "5px center",
                backgroundRepeat: "no-repeat",
              }}
              autoComplete="name"
            />
            {formSubmitted && errors.FNAME && (
              <span className="text-red-500">{errors.FNAME}</span>
            )}
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="EMAIL"
              name="EMAIL"
              value={registro.EMAIL}
              onChange={handleChange}
              placeholder="Ingresá tu Correo electrónico"
              className="input-f h-[40px] w-full px-4 pl-10 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
              style={{
                backgroundImage: `url(${email})`,
                backgroundSize: "25px 25px",
                backgroundPosition: "5px center",
                backgroundRepeat: "no-repeat",
              }}
              autoComplete="email"
            />
            {formSubmitted && errors.EMAIL && (
              <span className="text-red-500">{errors.EMAIL}</span>
            )}
          </div>
          <div className="mb-4">
            <div className="flex max-h-[54px] cursor-pointer">
              <Select
                options={countries.map((country) => ({
                  value: [country.code, country.name],
                  label: (
                    <div className="cursor-pointer flex items-center">
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-6 h-4"
                      />
                      <span>{country.name}</span>
                    </div>
                  ),
                }))}
                placeholder={null}
                value={
                  selectedCountry
                    ? {
                        value: [registro.CountryCode, registro.Country],
                        label: (
                          <div className="flex items-center cursor-pointer">
                            <img
                              src={selectedCountry.flag}
                              alt={selectedCountry.name}
                              className="w-6 h-4"
                            />
                            <span>{`${selectedCountry.name}`}</span>
                          </div>
                        ),
                      }
                    : registro.CountryCode
                }
                onChange={(selectedOption) => {
                  setRegistro({
                    ...registro,
                    CountryCode: selectedOption.value[0],
                    Country: selectedOption.value[1],
                  });
                  validate({
                    ...registro,
                    CountryCode: selectedOption.value,
                  });
                }}
                className="div-f w-2/3 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 cursor-pointer"
                styles={{
                  control: (provided) => {
                    const controlStyles = {
                      ...provided,
                      "&::placeholder": {
                        color: "lightgray",
                      },
                    };

                    if (!selectedCountry) {
                      controlStyles.backgroundImage = `url(${country})`;
                      controlStyles.backgroundSize = "25px 25px";
                      controlStyles.backgroundPosition = "5px center";
                      controlStyles.backgroundRepeat = "no-repeat";
                      controlStyles.paddingLeft = "40px";
                    }

                    return controlStyles;
                  },
                }}
              />
              <input
                type="text"
                id="PHONE"
                name="PHONE"
                value={registro.PHONE}
                onChange={handleChange}
                className="input-f h-[40px] w-full px-4 pl-10 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Tu número de Whatsapp sin código de área"
                required
                style={{
                  backgroundImage: `url(${phone})`,
                  backgroundSize: "25px 25px",
                  backgroundPosition: "5px center",
                  backgroundRepeat: "no-repeat",
                }}
                autoComplete="tel"
              />
            </div>
            {formSubmitted && errors.PHONE && (
              <span className="text-red-500">{errors.PHONE}</span>
            )}
            <p className="text-sm text-gray-600 mt-2">{getPhoneExample()}</p>
          </div>

          <div className="mb-2 flex items-center">
            <input
              type="text"
              id="verificationCodeInput"
              name="verificationCodeInput"
              value={registro.verificationCodeInput}
              onChange={handleChange}
              className="input-f h-[40px] w-full px-2  border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
              placeholder="Ingresa el código de verificación"
              required
            />
            <button
              type="button"
              onClick={handleSendVerificationCode}
              className="ml-2  bg-green-700 text-white px-2 py-2 rounded-lg hover:scale-110 duration-300 "
            >
              {isLoadingCode ? (
                <img className="w-12" src={loading} />
              ) : (
                <p className="px-2 text-xs text-center flex gap-x-1">Enviar código por Whatsapp<FaWhatsapp className="text-2xl" /> </p>
              )}
            </button>
          </div>
          <p className="mb-4 text-balance italic text-xs lg:text-sm">
   ¡Genial! Con el código de acceso que te enviamos por WhatsApp, tienes 72 horas para:
  <br />
  - Obtener acceso al <span className="font-bold">grupo VIP</span> de señales 📈
  <br />
  - Disfrutar de una <span className="font-bold">sesión de trading en vivo con Cristian Diaz</span> 💻
  <br />
  ¡No dejes pasar esta oportunidad!
</p>
          {formSubmitted && errors.verificationCodeInput && (
            <span className="text-red-500">{errors.verificationCodeInput}</span>
          )}

          <div className="flex items-center justify-center ">
            {isLoading ? (
              <img
                src={loading}
                alt="loading"
                className="max-w-[76px] max-h-[76px]"
              />
            ) : (
              <button
                type="submit"
                className="lol w-4/5 bg-gradient-to-r from-[#F59800] to-[#b56f00] text-white py-2 rounded-lg mx-auto block text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F59800] hover:scale-110 duration-300 mb-2"
              >
                VER EL MÉTODO AHORA
              </button>
            )}
          </div>
          <p className="mb-4 text-balance italic font-bold">Un miembro del equipo de Revolution te hablará por WhatsApp para darte acceso ⚜️</p>
        </form>
        <div className="text-center"></div>
        <p className="text-xs text-gray-600 text-center mt-8">
          &copy; 2024 Revolution Oficial
        </p>
      </div>
    </div>
  );
};

export default RegistroVerification;
