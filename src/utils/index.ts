export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

export const getDeclination = (titles: string[], count: number) => {
    const forDeclination = [2, 0, 1, 1, 1, 2];
    const rest = count % 100;
    const index = (rest > 10 && rest < 15) ? 2 : forDeclination[Math.min(count % 10, 5)];

    return `${count > 1 ? count : ''} ${titles[index]}`;
};
