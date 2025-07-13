import './styles/theme.css'
import './styles/global.css'

import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {

    return (
        <>
            <Heading>
                Olá mundo!
                <button>
                    <TimerIcon/>
                </button>
            </Heading>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic iure veritatis enim sequi assumenda. Suscipit blanditiis officiis ut enim, quisquam sunt, illo dolor molestiae, nulla nam explicabo beatae hic illum.

            </p>
        </>

    );
}
