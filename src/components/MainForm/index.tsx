import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaulfButton";
import { DefaultInput } from "../DefaulfInput";

export function MainForm() {
    return (
        <form className='form' action="">
            <div className="formRow">
                <DefaultInput labelText='task' id='input' type='text' placeholder='digite algo' />
            </div>
            <div className="formRow">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="formRow">
                <Cycles />
            </div>
            <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon />} color='green' />
            </div>
        </form>
    )
}