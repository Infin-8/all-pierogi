const styles = {
    layoutGridContainer: () => ({
        display: "grid",
        gridTemplateRows: ".15fr 1fr",
        height: "98vh",
        width: "98vw",
 
    }),
    layoutNav: () => ({
        display: "grid",
        gridTemplateColumns: `repeat(6, 1fr)`,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    })
};


export default styles