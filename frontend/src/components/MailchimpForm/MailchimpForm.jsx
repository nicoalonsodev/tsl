import React from 'react';

const MailchimpForm = () => {
    return (
        <div id="mc_embed_shell">
            <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
            <style type="text/css">
                {`
                    #mc_embed_signup { 
                        background: #fff; 
                        clear: left; 
                        font: 14px Helvetica, Arial, sans-serif; 
                        width: 600px;
                    }
                `}
            </style>
            <div id="mc_embed_signup">
                <form action="https://revolutionoficial.us13.list-manage.com/subscribe/post?u=8449426f8fafa7d818754f177&amp;id=8098f80fd7&amp;f_id=000e67e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                    <div id="mc_embed_signup_scroll">
                        <h2>Suscribir</h2>
                        <div className="indicates-required"><span className="asterisk">*</span> indica que es obligatorio</div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-EMAIL">Dirección de correo electrónico <span className="asterisk">*</span></label>
                            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-FNAME">Nombre</label>
                            <input type="text" name="FNAME" className="text" id="mce-FNAME" />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-PHONE">Número de teléfono</label>
                            <input type="text" name="PHONE" className="REQ_CSS" id="mce-PHONE" />
                        </div>
                        <div id="mce-responses" className="clear foot">
                            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                        </div>
                        <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                            <input type="text" name="b_8449426f8fafa7d818754f177_8098f80fd7" tabIndex="-1" value="" />
                        </div>
                        <div className="optionalParent">
                            <div className="clear foot">
                                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                                <p style={{ margin: '0px auto' }}>
                                    <a href="http://eepurl.com/iUBI0A" title="Mailchimp: marketing por correo electrónico fácil y divertido">
                                        <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
                                            <img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style={{ width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center' }} />
                                        </span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
            <script type="text/javascript">
                {`
                    (function($) {
                        window.fnames = new Array(); 
                        window.ftypes = new Array();
                        fnames[0] = 'EMAIL'; ftypes[0] = 'email';
                        fnames[1] = 'FNAME'; ftypes[1] = 'text';
                        fnames[4] = 'PHONE'; ftypes[4] = 'phone';
                        fnames[2] = 'LNAME'; ftypes[2] = 'text';
                        fnames[3] = 'ADDRESS'; ftypes[3] = 'address';
                        fnames[5] = 'BIRTHDAY'; ftypes[5] = 'birthday';
                    }(jQuery));
                    var $mcj = jQuery.noConflict(true);
                `}
            </script>
        </div>
    );
};

export default MailchimpForm;
