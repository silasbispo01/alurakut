import styled from "styled-components";

export const MainGrid = styled.main`
	grid-gap: 10px;
	padding: 16px;
	margin-left: auto;
	margin-right: auto;

	.profileArea {
		display: none;

		@media(min-width: 860px) {
			display: block;
		}
	}

	@media(min-width: 860px) {
        max-width: 70rem;
        display: grid;
		grid-template-areas: "profileArea welcomeArea profileRelationsArea";
		grid-template-columns: 160px 1fr 312px;

	}

`;