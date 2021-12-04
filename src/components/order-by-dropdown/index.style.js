// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
    return {
        mySelect: {
        position: 'relative',
        width: '200px',
        height: '30px',
        borderRadius: '3px'
        },
        select: {
            //display: inline-flex,
            height: '30px',
            width: '200px',
            fontSize: '16px',
            background: 'gray',
            padding: '2px 0 2px 10px'
        },
        option: {
          backgroundColor: 'gray'
        },
        iconWrapper: {
          position : 'absolute',
          right: '10px',
          top: '5px',
          width: '20px',
          height: '20px'
        },
        svg: {
            width: '100%',
            height: '100%',
            display: 'inline-block',
        },
    };
}