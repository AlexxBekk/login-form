import { mockLogin, mockVerify2FA } from "../mocks/mockApi";

export const login = (data) => mockLogin(data);
export const verify2FA = (data) => mockVerify2FA(data);

// аксиос вроде не нужен т.к. не знаю эндпоинты