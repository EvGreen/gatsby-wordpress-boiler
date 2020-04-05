const animationData = {
    pageAnimation: {
        initial: {
            y: 100,
            opacity: 0,
            //scale: 0.87,
        },
        active: {
            y: 0,
            opacity: 1,
            //scale: 1,
            transition: {
                delay: 0,
                duration: 0.6,
                ease: [0.6, 0, 0.01, 0.99],
            },
        },
    },
    fader: {
        initial: {
            display: "none",
            opacity: 0,
        },
        exit: {
            display: "block",
            opacity: 1,
            transition: {
                delay: 0,
                duration: 0.2,
                ease: [0.6, 0, 0.01, 0.99],
            },
        },
    },
    swiper: {
        initial: {
            y: 0,
            opacity: 1,
        },
        active: {
            y: "-100%",
            opacity: 1,
            transition: {
                delay: 0,
                duration: 0.4,
                ease: [0.6, 0, 0.01, 0.99],
            },
            transitionEnd: {
                display: "none",
            },
        },
    },
    fadeInUp: {
        initial: {
            y: 20,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99],
            },
        },
    },
    fadeInUpFaster: {
        initial: {
            y: 20,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.35,
                ease: [0.6, -0.05, 0.01, 0.99],
            }
        }
    },
    stagger: {
		animate: {
			transition: {
				staggerChildren: 0.05
			}
		}
	}
}

export default animationData