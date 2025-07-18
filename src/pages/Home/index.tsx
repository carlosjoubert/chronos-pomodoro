import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { MainTamplate } from "../../tamplates/MainTamplate";


export function Home() {
    return (
        <MainTamplate>
            <Container>
                <CountDown />
            </Container>

            <Container>
                <MainForm />
            </Container>
        </MainTamplate>
    );
}
