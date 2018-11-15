export default (bgcolor, text1, text2, ob = null) => {
    console.groupCollapsed(`%c${text1} %c ${text2}`, `background-color: ${bgcolor}`, 'background-color: transparent');
    if (ob) console.log(ob);
    console.groupEnd();
}

const wrCss = {
        maxWidth: '100%' 
    },
    formCss = {
        flexDirection: 'column',
        marginLeft: 40
    }

export { wrCss, formCss }

