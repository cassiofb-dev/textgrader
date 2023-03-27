import { Image } from "antd";

const Home = () => {
    return (
        <div style={{ padding: '0 50px', textAlign: "center" }}>
            <h1>Test Grader</h1>

            <Image src="/cefet-logo.jpg"/>

            <p style={{ marginTop: '16px' }}>
                Um sistema para avaliação automática de redações.
            </p>
        </div>
    );
};

export default Home;