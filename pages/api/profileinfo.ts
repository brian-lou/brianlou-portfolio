import { NextApiRequest, NextApiResponse } from 'next'
import { profile } from '../../utils/profileData'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        res.status(200).json(profile);
    }
}
export default handler;