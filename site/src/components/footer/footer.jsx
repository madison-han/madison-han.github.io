import React from "react";
import {
	Box,
	FooterContainer,
	Column,
} from "./footerStyle";

const Footer = () => {
	return (
		<Box>
			<FooterContainer>
                {/* <Row>
                    <Column>
                        <FooterLink href="https://github.com/madison-han">
                            <i class="fa fa-github"></i>
                        </FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="https://www.linkedin.com/in/madison-han-01b5701a4/">
                            <i class="fa fa-linkedin"></i>
                        </FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="mailto:madisonhan04@gmail.com">
                            <i class="fa fa-envelope"></i>
                        </FooterLink>
                    </Column>
                </Row> */}
                <Column>
                        &copy; 2023, Madison Han.
				</Column>
			</FooterContainer>
		</Box>
	);
};
export default Footer;
