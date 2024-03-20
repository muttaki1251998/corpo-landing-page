exports.id = 57;
exports.ids = [57];
exports.modules = {

/***/ 5169:
/***/ ((module) => {

// Exports
module.exports = {
	"cta": "CTA_cta__aHWey",
	"cta-content": "CTA_cta-content__4iipH",
	"cta-content-part": "CTA_cta-content-part__GjSVN",
	"ui-button": "CTA_ui-button__EuWPC",
	"small": "CTA_small___SDMG"
};


/***/ }),

/***/ 6814:
/***/ ((module) => {

// Exports
module.exports = {
	"toast": "Toast_toast__OHkj6",
	"toast-row": "Toast_toast-row__c_J5_",
	"toast-row-content": "Toast_toast-row-content__yveXE"
};


/***/ }),

/***/ 2057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_CTA)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Toast/Toast.module.scss
var Toast_module = __webpack_require__(6814);
var Toast_module_default = /*#__PURE__*/__webpack_require__.n(Toast_module);
// EXTERNAL MODULE: external "@mui/icons-material/SendOutlined"
var SendOutlined_ = __webpack_require__(8026);
var SendOutlined_default = /*#__PURE__*/__webpack_require__.n(SendOutlined_);
;// CONCATENATED MODULE: ./components/Toast/index.tsx





const Toast = ({ open , title , content  })=>{
    const matches = (0,material_.useMediaQuery)('(max-width:912px)');
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Slide, {
        direction: matches ? 'up' : 'left',
        in: open,
        mountOnEnter: true,
        unmountOnExit: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Toast_module_default()).toast,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Toast_module_default())["toast-row"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((SendOutlined_default()), {
                            htmlColor: "#00838F"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Toast_module_default())["toast-row-content"],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: content
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const components_Toast = (Toast);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/icons-material/Email"
var Email_ = __webpack_require__(9226);
var Email_default = /*#__PURE__*/__webpack_require__.n(Email_);
;// CONCATENATED MODULE: ./components/CTA/components/TextField/index.tsx



const StyledTextField = (0,material_.styled)(material_.TextField)`
  &.MuiInputBase-root {
    color: #fff;
    &.MuiInput-root {
      color: #fff;
      height: 30px;
      color: #fff;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      font-family: 'IBM Plex Sans';
      margin-bottom: 24px;
    }
  }

  /*
  & .MuiInput-underline {
    border-color: #fff;
    &::after {
      border-color: #fff;
    }
    &::before {
      border-color: #fff;
    }
    &:active {
      border-color: #fff;
    }
    &:hover {
      border-color: #fff;
    }
  }*/

  input {
    color: #fff;
    height: 30px;
    padding-bottom: 2px;
  }

  label {
    color: #fff;
    &.Mui-focused {
      color: #fff;
    }
  }
`;
const TextField = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            borderBottom: '1px solid white'
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledTextField, {
            variant: "standard",
            fullWidth: true,
            color: "secondary" // just force to white color
            ,
            InputProps: {
                required: true,
                disableUnderline: true
            },
            ...props
        })
    }));
};
/* harmony default export */ const components_TextField = (TextField);

// EXTERNAL MODULE: ./components/CTA/CTA.module.scss
var CTA_module = __webpack_require__(5169);
var CTA_module_default = /*#__PURE__*/__webpack_require__.n(CTA_module);
;// CONCATENATED MODULE: ./components/CTA/index.tsx










const theme = (0,styles_.createTheme)({
    palette: {
        secondary: {
            main: '#fff',
            light: '#fff',
            dark: '#fff'
        }
    }
});
const initState = {
    first_name: '',
    last_name: '',
    company: '',
    email: '',
    description: ''
};
const formReducer = (state, action)=>{
    return {
        ...state,
        [action.name]: action.payload
    };
};
const CTA = ()=>{
    const router = (0,router_.useRouter)();
    const { 0: success , 1: setSuccess  } = (0,external_react_.useState)(false);
    const { 0: baseUrl , 1: setBaseUrl  } = (0,external_react_.useState)('');
    const salesforceUrl = 'https://webto.salesforce.com/test/test.WebToLead?encoding=UTF-8';
    const { 0: form , 1: setForm  } = (0,external_react_.useReducer)(formReducer, initState);
    const toggleTost = ()=>{
        setSuccess((value)=>!value
        );
    };
    (0,external_react_.useEffect)(()=>{
        const timeout = setTimeout(()=>{
            setSuccess(false);
        }, 3000);
        return ()=>{
            clearTimeout(timeout);
        };
    }, [
        success
    ]);
    (0,external_react_.useEffect)(()=>{
        setBaseUrl( false ? 0 : 'https://www.test.com');
        setSuccess(router.query.success ? true : false);
    }, [
        router
    ]);
    const handleChange = (event, name)=>{
        setForm({
            name,
            payload: event.target.value
        });
    };
    const handleSubmit = ()=>{
        const { first_name , last_name , company , description , email  } = form;
        if (!first_name || !last_name || !company || !email) {
            return;
        }
        console.log('formData', form);
        toggleTost();
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "cta",
        className: (CTA_module_default()).cta,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (CTA_module_default())["cta-content"],
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (CTA_module_default())["cta-content-part"],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "Connect With Us"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Speak to a team member to learn more."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '30px'
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Email_default()), {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        style: {
                                            marginLeft: '20px'
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "mailto:muttaki4989@gmail.com",
                                            children: "muttaki4989@gmail.com"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(styles_.ThemeProvider, {
                        theme: theme,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (CTA_module_default())["cta-content-part"],
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                action: salesforceUrl,
                                method: "POST",
                                target: "_blank",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "hidden",
                                        name: "oid",
                                        value: "00D5f000006OVNu"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "hidden",
                                        name: "retURL",
                                        value: `${baseUrl}?success=true&cta=true`
                                    }),
                                    "​",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                        container: true,
                                        spacing: 2,
                                        columnSpacing: 4,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                item: true,
                                                xs: 12,
                                                sm: 6,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_TextField, {
                                                    id: "first_name",
                                                    label: "First Name",
                                                    inputProps: {
                                                        maxLength: 80
                                                    },
                                                    name: "first_name",
                                                    type: "text",
                                                    value: form.first_name,
                                                    onChange: (event)=>handleChange(event, 'first_name')
                                                    ,
                                                    placeholder: "First Name"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                item: true,
                                                xs: 12,
                                                sm: 6,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_TextField, {
                                                    id: "last_name",
                                                    label: "Last Name",
                                                    inputProps: {
                                                        maxLength: 80,
                                                        color: 'white'
                                                    },
                                                    name: "last_name",
                                                    color: "secondary",
                                                    type: "text",
                                                    value: form.last_name,
                                                    onChange: (event)=>handleChange(event, 'last_name')
                                                    ,
                                                    placeholder: "Last Name"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                item: true,
                                                xs: 12,
                                                sm: 6,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_TextField, {
                                                    id: "company",
                                                    label: "Company",
                                                    inputProps: {
                                                        maxLength: 40
                                                    },
                                                    name: "company",
                                                    type: "text",
                                                    value: form.company,
                                                    onChange: (event)=>handleChange(event, 'company')
                                                    ,
                                                    placeholder: "Company"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                item: true,
                                                xs: 12,
                                                sm: 6,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_TextField, {
                                                    id: "email",
                                                    label: "Email",
                                                    inputProps: {
                                                        maxLength: 80
                                                    },
                                                    name: "email",
                                                    type: "email",
                                                    value: form.email,
                                                    onChange: (event)=>handleChange(event, 'email')
                                                    ,
                                                    placeholder: "Email"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                item: true,
                                                xs: 12,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_TextField, {
                                                    color: "secondary",
                                                    style: {
                                                        height: 'auto',
                                                        color: '#fff'
                                                    },
                                                    id: "description",
                                                    label: "Message",
                                                    value: form.description,
                                                    onChange: (event)=>handleChange(event, 'description')
                                                    ,
                                                    inputProps: {
                                                        color: '#fff'
                                                    },
                                                    multiline: true,
                                                    minRows: 2,
                                                    maxRows: 7,
                                                    InputProps: {
                                                        required: false,
                                                        disableUnderline: true
                                                    },
                                                    name: "description",
                                                    type: "text",
                                                    placeholder: 'Message'.toUpperCase()
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: (CTA_module_default()).small,
                                        children: [
                                            "By submitting your information, you agree to the",
                                            ' ',
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/privacy-and-cookies",
                                                children: "privacy policy"
                                            }),
                                            "."
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: "ui-button secondary",
                                        type: "submit",
                                        name: "submit",
                                        value: 'Submit',
                                        onClick: ()=>handleSubmit()
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Toast, {
                open: success,
                content: "Your information has been received. A team member will reach out to you soon.",
                //subContent={'A team member will reach out to you soon.'}
                title: "Message sent successfully"
            })
        ]
    }));
};
/* harmony default export */ const components_CTA = (CTA);


/***/ })

};
;