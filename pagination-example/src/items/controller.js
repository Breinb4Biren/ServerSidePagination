import pool from '../../db.js';
import queries from './queries.js';

const getItems = (req, res) => {
    pool.query(queries.getItems, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getItemsPaginated = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 2;
    const offset = (page - 1) * pageSize;

    pool.query(queries.getItemsPaginated, [pageSize, offset], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

export {
    getItems,
    getItemsPaginated
};
