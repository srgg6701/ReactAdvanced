export default (bgcolor, text1, text2, ob = null) => {
    console.groupCollapsed(`%c${text1} %c ${text2}`, `background-color: ${bgcolor}`, 'background-color: transparent');
    if (ob) console.log(ob);
    console.groupEnd();
}

const wrCss = {
        display: 'flex',
        /* flexDirection: 'column', */
        float: 'right',
        marginLeft: 40
    },
    formCss = {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 40,
        marginTop: 20
    }

export { wrCss, formCss }

