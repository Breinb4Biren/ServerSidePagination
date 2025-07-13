import express from 'express';
import { getItems, getItemsPaginated } from './controller.js';

const router = express.Router();

router.get('/', getItems);
router.get('/paginated', getItemsPaginated);

export default router;
