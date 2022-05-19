export const postLoginSchema = {
    $id: "loginSchema",
    type: "object",
    properties: {
        code: {
            type: "number",
            enum: [200],
        },
        message: {
            type: "string",
            enum: ["Login Berhasil, Mohon Tunggu..."],
        },
        data: {
            type: "object",
            properties: {
                user_id: {
                    type: "number",
                },
                access_token: {
                    type: "string",
                },
                user_group: {
                    type: "string",
                },
                company_id: {
                    type: "string"
                }
            }
        }
    }
};

export const postLoginFailedSchema = {
    $id: "loginFailedSchema",
    type: "object",
    properties: {
        code: {
            type: "number",
            enum: [204],
        },
        message: {
            type: "string",
            enum: ["Kombinasi Username dan Password tidak ditemukan"],
        }
    }
};