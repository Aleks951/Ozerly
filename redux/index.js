const initialState = {
    showPopap: false,
    success: false,
    validate: {
        phone: "",
        name: "",
        message: ""
    },
    phone: "",
    name: "",
    message: ""
};

export default (state = initialState, action) => {
    // SHOWPOPAP
    if (action.type === "SHOWPOPAP") {
        return {
            ...state,
            showPopap: true
        };
    };

    // CHANGESINPUT
    if (action.type === "CHANGESINPUT") {
        switch (action.input) {
            case "phone":
                return {
                    ...state,
                    phone: action.value
                };
                break;
            case "name":
                return {
                    ...state,
                    name: action.value
                };
                break;
            case "message":
                return {
                    ...state,
                    message: action.value
                };
                break;
        };
    };

    // SUBMIT
    if (action.type === "SUBMIT") {
        let validate = {
            ...state.validate
        };

        if (state.phone !== "") {
            validate.phone = "success";
        } else {
            validate.phone = "error";
        };

        if (state.name !== "") {
            validate.name = "success";
        } else {
            validate.name = "error";
        };

        if (state.message !== "") {
            validate.message = "success";
        } else {
            validate.message = "error";
        };

        if (validate.phone === "success" && validate.phone === validate.name && validate.phone === validate.message) {
            return {
                ...state,
                success: true,
                showPopap: false
            };
        };

        return {
            ...state,
            validate
        };
    };

    return state;
};