import { URL } from 'react-native-url-polyfill';
import moment from 'moment';
import { colors } from '../config';

export const renderSalary = salary => {
  if (!salary) {
    return 0;
  }

  salary = Math.round(salary);
  if (salary > 10000) {
    return '10 000';
  }
  if (salary < 1000) {
    return salary;
  }

  const str = String(salary);
  return `${str[0]} ${str.slice(1)}`;
};

export const capitalizeFirstLetter = string => {
  if (!string) {
    return ' ';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const serializeData = (arr, data) => {
  return data?.map(item => serializeItem(item, arr));
};

function serializeItem(item, keys) {
  let obj = {};
  for (let i = 0; i <= keys.length - 1; i++) {
    obj[keys[i]] = item[keys[i]];
  }
  return obj;
}

export const getPathnameInUrl = url => {
  const path = new URL(url).pathname;
  return path.slice(1);
};

export const dateFromNow = date => {
  return moment.utc(date).local().startOf('seconds').fromNow();
};

export const formatData = date => {
  return moment().utc(date).format('L');
};

export const getCurrentDate = date => {
  const currDate = moment().utc(date).format('YYYY-MM-DD');
  return currDate;
};

export const serializeTableData = statistic => {
  const serelizeObj = statistic?.reduce((acc, item, index) => {
    return [
      ...acc,
      {
        id: item.id,
        '#': index + 1,
        'Leader name': item.username,
        sales: item.sales,
      },
    ];
  }, []);
  return serelizeObj;
};

function randColor() {
  for (var i = 0, col = ''; i < 6; i++) {
    col += ((Math.random() * 16) | 0).toString(16);
  }
  return '#' + col;
}

const generateRandomColors = elem => {
  if (!elem) {
    const newColor = randColor();
    return newColor;
  } else {
    return elem;
  }
};

export const serializeCategory = categoriesStat => {
  const serelizeObj = categoriesStat?.reduce((acc, item) => {
    const newColor = generateRandomColors(colors[item.category]);
    return [
      ...acc,
      {
        key: item.category + item.percent,
        category: item.category,
        value: item.percent,
        color: newColor,
        svg: {
          fill: newColor,
        },
      },
    ];
  }, []);
  return serelizeObj;
};

export const serializeCategoryTable = categoriesStat => {
  const serelizeObj = categoriesStat?.reduce((acc, item, index) => {
    return [
      ...acc,
      {
        id: item.category + item.persent,
        category: item.category,
        '#': index + 1,
        sales: item.sales,
      },
    ];
  }, []);
  return serelizeObj;
};

export const findItem = (id, arr) => {
  return arr?.find(item => item.id === id);
};

export const findeSumm = arr => {
  return arr.reduce((acc, item) => acc + item.quantity, 0);
};
