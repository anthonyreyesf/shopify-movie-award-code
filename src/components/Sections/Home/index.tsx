import image from "../../Assets/Millenium-0129.jpg";
import * as s from "./styles";

function Home() {
    return (
        <s.Section>
            <s.About>
                <s.headline>Hi, my name is Anthony Reyes{'\n'}+ I'm a student @YorkU!</s.headline>
                <s.Description>
                    Here is my submission for the Fall 2021 Frontend Developer Internship role :){'\n'}
                    Connect with me on <s.Link href="https://www.linkedin.com/in/anthonyreyesf/">LinkedIn</s.Link>!
                </s.Description>
            </s.About>

			<s.FactContainer>
				<s.FactTitle>FUN FACT</s.FactTitle>
				<s.FactDescription>
					I used to use Shopify to sell my clothing brand from 2016-2019. I also got to work{'\n'}
					with Toronto based content creators like <s.LinkTwo href="https://www.instagram.com/bilaldawson/?hl=en">Bilal Dawson</s.LinkTwo> and <s.LinkTwo href="https://www.instagram.com/sneakertalkca/?hl=en">SneakerTalk</s.LinkTwo>.
				</s.FactDescription>
			</s.FactContainer>
			<s.Image src={image}/>
        </s.Section>
    );
}

export default Home;