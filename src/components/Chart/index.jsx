/* eslint-disable import/no-anonymous-default-export */
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

export default ({ data, size }) => {
    let captions = {};
    let stat = [{
        data: {},
        meta: { color: 'red' }
    }];
    data.map((item, index) => {
        const aux = item.stat.name;
        captions[index] = aux;
        stat[0].data[index] = parseFloat(`0.${item.base_stat}`);
    })
    let aux = window.screen.width;
    if (window.screen.width < 1068) aux = size - (size * 0.3)
    else aux = size
    return <RadarChart data={stat} captions={captions} size={aux} />
}