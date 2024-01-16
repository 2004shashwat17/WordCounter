import { Header } from "../components/Header";
import { Counter } from "../components/Counter";

export function HomePage() {
    return (
        <main>
            <Header heading="Word Counter" subHeading="To use WordCounter, Paste text in the given textarea box below"></Header>
            <Counter/>
        </main>
    );
}