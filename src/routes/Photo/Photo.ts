import { Router } from 'express';

const photoRouter = Router();

photoRouter.get('/', (req, res) => {
    res.send('Hello to my photo')
})

export default photoRouter;