const animationData = {
    pageAnimation: {
        initial: {
            x: 100,
            opacity: 0,
            transition: {
            delay: 0,
            duration: 0.25,
            ease: [0.6, -0.05, 0.01, 0.99],
            },
        },
        active: {
            x: 0,
            opacity: 1,
            transition: {
            delay: 0,
            duration: 0.4,
            when: "beforeChildren",
            staggerChildren: 0.1,
            ease: [0.6, -0.05, 0.01, 0.99],
            },
        },
        exit: {
            opacity: 0,
            x: -50,
            transition: {
            delay: 0,
            duration: 0.4,
            ease: [0.6, -0.05, 0.01, 0.99],
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