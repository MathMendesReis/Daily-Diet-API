import { Server } from 'http';

export interface ServerContract {
    createServer(): Server;
}

