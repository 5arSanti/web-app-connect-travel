import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import { IoSearch } from "react-icons/io5";

import "./styles.css";
import { WrapperContainer2 } from '../WrapperContainers';
import { TextCard } from '../TextComponents';
import { InputCard } from '../InputsCards';
import { ScrollableWrapper } from '../ScrollableWrapper';

export interface DropCardItem {
    name: string;
    icon: React.ReactNode;
}

interface DropCardProps {
    title: string;
    array: DropCardItem[];
    onClick: (value: string) => void;
    value: string;
    searchBox?: boolean;
    seeAllOption?: boolean;
}

const DropCard: React.FC<DropCardProps> = ({
    title,
    array,
    onClick,
    value,
    searchBox = true,
    seeAllOption = true,
}) => {
    const [searchValue, setSearchValue] = React.useState<string>("");

    const filteredArray: DropCardItem[] = searchValue.trim() === '' ? array : array.filter(item => item.name?.toLocaleLowerCase().includes(searchValue));

    return (
        <WrapperContainer2 padding={0} flexDirection='column' justifyContent='start' alignItems='start' gap={10}>
            <TextCard className='bold' fontSize={12}>{title}</TextCard>

            <Dropdown className="dropdown-card-container">
                <Dropdown.Toggle id="dropdown-card-basic" className='dropdown-card-button'>
                    {(value == "" || !value) && "Todo" ||
                        <>
                            {array.find(item => item.name === value)?.name}
                        </>
                    }
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-card-grid-container">
                    {searchBox &&
                        <InputCard
                            id={"search-icon-input"}
                            label={"Buscar"}
                            placeholder='Buscar'
                            onChange={(event) => { setSearchValue(event.target.value.toLocaleLowerCase()) }}
                            defaultValue={searchValue}
                            className='dropdown-card-search-input'
                            required={false}
                            haveLabel={false}
                            icon={<IoSearch />}
                            type="text"
                        />
                    }

                    <ScrollableWrapper height="200px">
                        {seeAllOption &&
                            <Dropdown.Item onClick={() => onClick("")}>
                                <TextCard>Todo</TextCard>
                            </Dropdown.Item>
                        }
                        {filteredArray?.map((item: DropCardItem, index: number) => (
                            <Dropdown.Item key={index} onClick={() => {
                                onClick(item.name)
                                setSearchValue("");
                            }}>
                                <WrapperContainer2
                                    flexDirection="row"
                                    justifyContent="start"
                                    alignItems="center"
                                    gap={10}
                                    padding={5}
                                >
                                    {item.icon}
                                    <TextCard>{item.name}</TextCard>
                                </WrapperContainer2>
                            </Dropdown.Item>
                        ))}
                    </ScrollableWrapper>
                </Dropdown.Menu>
            </Dropdown>
        </WrapperContainer2>

    )
}

export { DropCard };