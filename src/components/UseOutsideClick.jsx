import React, { useEffect } from "react";

function UseOutsideClick(ref, handler) {
	useEffect(() => {
		function listener(event) {
			console.log(ref.current);
			console.log(!ref.current);

			if (!ref.current || ref.current.contains(event.target)) {
				console.log("hello world");
				return;
			}

			handler(event);
			console.log(ref.current);
			console.log(!ref.current);
		}

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [handler, ref]);
}

export default UseOutsideClick;
