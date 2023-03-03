import instance from './index';

const getGameInfoList = (title: string, page: number = 0, size: number = 5) => instance.get(`/games?title=${title}&page=${page}&size=${size}`);

export default getGameInfoList;
