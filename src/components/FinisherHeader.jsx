import { useEffect } from "react";
import "finisher-header";

export default function FinisherHeader() {
    useEffect(() => {
        try {
            new window.FinisherHeader({
                count: 50,

                size: {
                    min: 2,
                    max: 4,
                    pulse: 0
                },

                speed: {
                    x: {
                        min: 0,
                        max: 0.1
                    },
                    y: {
                        min: 0,
                        max: 0.1
                    }
                },

                colors: {
                    background: "#14221b",
                    particles: [
                        "#86a975"
                    ]
                },

                blending: "overlay",

                opacity: {
                    center: 1,
                    edge: 0.1
                },

                skew: 0,

                shapes: [
                    "c"
                ]
            });
        } catch (error) {
            console.error(error);
        }
    }, []);

    return null;
}