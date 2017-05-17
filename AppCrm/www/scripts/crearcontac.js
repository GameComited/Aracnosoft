// Si quiere una introducción sobre la plantilla En blanco, vea la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar código al cargar la página en cordova-simulate o en dispositivos o emuladores Android: inicie la aplicación, establezca puntos de interrupción 
// y ejecute "window.location.reload()" en la Consola de JavaScript.
(function () {
    "use strict";

    //Escuchamos y cuando llega al id deviceready ejecuta la funcion OnDeviceReady()
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
            //$('#contact_form').bootstrapValidator({
            //    // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
            //    feedbackIcons: {
            //        valid: 'glyphicon glyphicon-ok',
            //        invalid: 'glyphicon glyphicon-remove',
            //        validating: 'glyphicon glyphicon-refresh'
            //    },
            //    fields: {
            //        first_name: {
            //            validators: {
            //                stringLength: {
            //                    min: 2,
            //                },
            //                notEmpty: {
            //                    message: 'Por favor suministranos el nombre'
            //                }
            //            }
            //        },
            //        last_name: {
            //            validators: {
            //                stringLength: {
            //                    min: 2,
            //                },
            //                notEmpty: {
            //                    message: 'Por favor suministranos el apellido'
            //                }
            //            }
            //        },
            //        email: {
            //            validators: {
            //                notEmpty: {
            //                    message: 'Por favor suministranos la dirección email'
            //                },
            //                emailAddress: {
            //                    message: 'Por favor suministranos una dirección email valida'
            //                }
            //            }
            //        },
            //        phone: {
            //            validators: {
            //                notEmpty: {
            //                    message: 'Por favor suministranos el Teléfono'
            //                },
            //                phone: {
            //                    country: 'ES',
            //                    message: 'Por favor suministranos un numero de teléfono valido'
            //                }
            //            }
            //        },
            //        address: {
            //            validators: {
            //                stringLength: {
            //                    min: 8,
            //                },
            //                notEmpty: {
            //                    message: 'Por favor suministranos una dirección'
            //                }
            //            }
            //        },
            //        city: {
            //            validators: {
            //                stringLength: {
            //                    min: 4,
            //                },
            //                notEmpty: {
            //                    message: 'Please supply your city'
            //                }
            //            }
            //        },
            //        state: {
            //            validators: {
            //                notEmpty: {
            //                    message: 'Por favor selecciona la provincia'
            //                }
            //            }
            //        },
            //        zip: {
            //            validators: {
            //                notEmpty: {
            //                    message: 'Por favor suministranos el código postal'
            //                },
            //                zipCode: {
            //                    country: 'ES',
            //                    message: 'Por favor suministranos el código postal valido'
            //                }
            //            }
            //        },
            //        company: {
            //            validators: {
            //                stringLength: {
            //                    min: 4,
            //                },
            //                notEmpty: {
            //                    message: 'Por favor suministranos una organización o empresa'
            //                }
            //            }
            //        },
            //        dni: {
            //            validators: {
            //                stringLength: {
            //                    min: 8,
            //                },
            //                notEmpty: {
            //                    message: 'Por favor suministranos un número de Identificación oficial'
            //                }
            //            }
            //        },
            //        comment: {
            //            validators: {
            //                stringLength: {
            //                    min: 10,
            //                    max: 200,
            //                    message: 'Por favor introduce un mínimo de de 10 caracteres y no más de 200'
            //                },
            //                notEmpty: {
            //                    message: 'Por favor suministranos una anotación breve'
            //                }
            //            }
            //        }
            //})
            //    .on('success.form.bv', function (e) {
            //        $('#success_message').slideDown({ opacity: "show" }, "slow")
            //        // Do something ...
            //        $('#contact_form').data('bootstrapValidator').resetForm();

            //        // Prevent form submission
            //        e.preventDefault();

            //        // Get the form instance
            //        var $form = $(e.target);

            //        // Get the BootstrapValidator instance
            //        var bv = $form.data('bootstrapValidator');

            //        // Use Ajax to submit form data
            //        $.post($form.attr('action'), $form.serialize(), function (result) {
            //            console.log(result);
            //        }, 'json');
            //    });
    };

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
    };
})();