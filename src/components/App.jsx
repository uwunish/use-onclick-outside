import React, { useState, useRef } from "react";
import UseOutsideClick from "./UseOutsideClick";

function App() {
	const [showContent, setShowContent] = useState(false);
	const ref = useRef();

	UseOutsideClick(ref, () => setShowContent(false));

	return (
		<div className="app-container">
			{showContent ? (
				<div ref={ref}>
					<h1>This is a random content</h1>
					<p>Click outside to close this random content</p>
				</div>
			) : (
				<button onClick={() => setShowContent(true)}>
					Show Content
				</button>
			)}
		</div>
	);
}

export default App;
