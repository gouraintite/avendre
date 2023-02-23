import React, {useState, useEffect} from "react";

const FadeReload = ({ children }) => {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        setFade(true);
        return () => setFade(false);
    }, []);

    return (
        <div
            style={{
                transition: 'opacity 1s',
                opacity: fade ? 1 : 0,
            }}
        >
            {children}
        </div>
    );
};

export default FadeReload;

