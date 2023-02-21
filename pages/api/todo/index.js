import { getTodos, addTodo } from '../../../firebase/firestore'

export default async function handler(req, res) {
    if (req.method == 'GET') {
        try {
            const data = await getTodos();
            return res.status(200).json({ data: data });
        } catch (error) {
            return res.status(400).json({ message: 'Error' });
        }
    } else if (req.method == 'POST') {
        try {
            const data = await addTodo(req.body);
            return res.status(200).json({ data: data });
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    } else {
        return res.status(500).json({ message: 'METHOD IS NOT ALLOWED' })
    }
}