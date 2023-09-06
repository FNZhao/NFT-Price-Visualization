import './App.css';
import { Layout, Input, Button, List, Card, message } from 'antd';
import React, { useState } from 'react';
import { getContractNFTs } from './utils';
import NftCard from './components/NFTCard';
import ContractTrades from './components/ContractTrades';

const { Header, Content } = Layout;

function App() {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [nfts, setNfts] = useState([]);

  const handleSearch = async () => {
    if (searchText === '') {
      return;
    }

    setLoading(true);

    try {
      const data = await getContractNFTs(searchText);
      setNfts(data.result);
    } catch (e) {
      message.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout
      style={{ height:"100vh" }} //vh: viewport height用户所能看见的视窗高度
    >
      <Header
        style={{ fontSize: 16, fontWeight: 600, color: "white" }}
      >
        NFT Browser
      </Header>

      <Content
        style={{ height: "calc(100% - 64px)", padding: 20, overflow: "auto" }}//100%是指父component的100%//padding是content和border的距离
      >
        <Input.Group>
          <Input 
            style={{ width: 500 }}
            placeholder='Enter a NFT contract address to search'
            value={searchText}//这行和下行组成了受控模式，这个一直在灌注当前的text，下一行一直在更新text
            onChange={(e) => setSearchText(e.target.value)}//onChange是只要改变就执行
          />
          <Button type='primary' onClick={handleSearch}>Search</Button>
          <ContractTrades tokenAddress={searchText} />
        </Input.Group>
        <List 
          style={{
            marginTop: 30,
            height: "calc(100% - 52px)",
            overflow: "auto"
          }}
          grid={{//不同屏幕尺寸下的容量
            gutter: 16,
            xs: 1,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          dataSource={nfts}//这是关键的两个属性
          renderItem={(nft) => (
            <List.Item key={nft}>
              <NftCard nft={nft} />
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
}

export default App;
