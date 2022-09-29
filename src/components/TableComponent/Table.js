import React, { useEffect, useState } from 'react';
import { HeaderTable } from './HeaderTable';
import { ColTable } from './ColTable';
import { serializeData } from '../../helpers';
import {
  inventoryTableHeader,
  historyTableHeader,
  categorySalesTabHeader,
  leaderBoardTableHeader,
  colors,
} from '../../config';
import { FlatList } from 'react-native';
import { Pressable, ScrollView, VStack } from 'native-base';
import { CustomPopap } from '..';

export const Table = ({ data, tableName }) => {
  const [table, setTable] = useState([]);
  const [header, setHeader] = useState([]);
  const [maxHight, setMaxHight] = useState(430);

  const chooseTable = (arrHeader, dataTable) => {
    const newHistory = serializeData(arrHeader, dataTable);
    setTable(newHistory);
    setHeader(arrHeader);
    if (tableName === 'history') {
      setMaxHight(130);
    }
  };

  const filertTableData = prod => {
    if (tableName === 'Running low') {
      if (
        prod === 'name' ||
        prod === 'category' ||
        prod === 'price' ||
        'quantity'
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };

  useEffect(() => {
    switch (tableName) {
      case 'My inventory': {
        chooseTable(inventoryTableHeader, data);
        break;
      }
      case 'Running low': {
        // chooseTable(inventoryTableHeader, data);
        setTable(data);
        break;
      }
      case 'General': {
        chooseTable(inventoryTableHeader, data);
        break;
      }
      case 'history': {
        chooseTable(historyTableHeader, data);
        break;
      }
      case 'categorySales': {
        chooseTable(categorySalesTabHeader, data);
        break;
      }
      case 'leaderBoard': {
        chooseTable(leaderBoardTableHeader, data);
        break;
      }
    }
  }, [data, tableName]);

  return (
    <VStack maxH="480" borderRadius="md">
      <HeaderTable titles={header} />
      {
        <ScrollView maxH="430">
          {table &&
            table.map((item, index) => {
              return (
                filertTableData(item) && (
                  <ColTable
                    key={item.id}
                    titles={header}
                    tableName={tableName}
                    data={item}
                    index={index}
                    id={item.id}
                    colLength={table.length - 1}
                  />
                )
              );
            })}
        </ScrollView>
      }
    </VStack>
  );
};

/*
 <ScrollView
        _contentContainerStyle={{
          maxH: '430',
          minW: '72',
        }}>
        {table &&
          table.map((item, index) => {
            return (
              <ColTable
                key={item.id}
                titles={header}
                tableName={tableName}
                data={item}
                index={index}
                id={item.id}
              />
            );
          })}
      </ScrollView>
      */
