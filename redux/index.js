const initialState = {
    showPopap: false,
    success: false,
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
    // По идеи попап должен закрываться после ответа с сервер (код 200)
    if (action.type === "SUBMIT") {
        let { phone, name } = state;
        if (phone.length === 10 && name !== "") {
            return {
                ...state,
                showPopap: false,
                success: true,
            };
        };

        return state;
    };

    return state;
};