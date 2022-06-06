import { articles } from '../../../data'

export default function handler(re, res) {
    res.status(200).json(articles)
}