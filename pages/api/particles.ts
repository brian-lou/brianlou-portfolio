import { NextApiRequest, NextApiResponse } from 'next'
import particlesConfig from '../../utils/configParticles'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        res.status(200).json(particlesConfig);
    }
}
export default handler;