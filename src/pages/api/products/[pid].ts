// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data } from './data';

export default (req, res) => {

    const {
        query: { pid },
    } = req

    const product = data.find(p => p.id === parseInt(pid));

    res.json(product || []);
}
