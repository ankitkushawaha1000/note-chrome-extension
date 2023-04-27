export default {
    parent_wrapper: {
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "400",
        bottom: "unset",
        right: "unset",
    },

    popper: {
        borderRadius: "4px",
        boxSizing: "border-box",
        color: "rgba(255, 255, 255, 1)",
        zIndex: "400",

        /* dynamic styles to apply using javascript	 */
        // position: "absolute",
        inset: "auto auto 0px 0px",
        /*     transform: translate(305px, 1424px); */
        // transform: "translate(10px, 53px)",
        transform: "translate(-40px, -5px)",
    },


    tooltip_container: {
        /* an animation is applied to it as well, see it on medium */
        transformOrigin: "center bottom",
        willChange: "transform",
        background: "rgb(255, 255, 255)",
        borderRadius: "4px",
    },

    tooltip: {
        // Medium.com colors
        // background: "rgb(41, 41, 41)",
        // Whimsical colors
        background: "#293845",
        // borderRadius: "3px",
        borderRadius: "5px",
    },

    list: {
        // display: "inline-block",
        display: "flex",
        fill: "rgba(255, 255, 255, 1)",
        whiteSpace: "nowrap",
        padding: "8px 0px",
    },

    first_item: {
        // display: "inline-block",
        display: "flex",
        padding: "0px 12px 0px 10px",
    },

    separator: {
        height: "25px",
        display: "inline-block",
        background: "rgba(255, 255, 255, 0.2)",
        width: "1px",
        verticalAlign: "top",
    },

    last_item: {
        display: "inline-block",
        padding: "0px 16px",
    },

    highlighter_wrapper: {
        display: "inline-block",
        paddingRight: "6px",
    },

    highlighter: {
        color: "inherit",
        textDecoration: "none",
        WebkitTapHighlightColor: "transparent",
        fill: "inherit",
        fontSize: "inherit",
        border: "inherit",
        fontFamily: "inherit",
        letterSpacing: "inherit",
        fontWeight: "inherit",
        margin: "0",
        padding: "0",
        cursor: "pointer",
    },

    nothing: {
        display: "inline-block",
        paddingRight: "6px",
    },

    tail: {
        // position: "absolute",
        pointerEvents: "none",
        bottom: "-14px",
        // left: "50%",
        clip: "rect(0px, 18px, 18px, -4px)",

        /* dynamic styles */
        position: "absolute",
        left: "0px",
        transform: "translate(51px, -1px)",
    },

    tail_segment: {
        display: "block",
        width: "14px",
        height: "14px",
        // Medium.com colors
        // background: "rgb(41, 41, 41)",
        // Whimsical colors
        background: "#293845",
        transform: "rotate(45deg) translate(-6px, -6px)",
        boxShadow: "rgb(117, 117, 117) 1px 1px 1px - 1px",
    },
}
