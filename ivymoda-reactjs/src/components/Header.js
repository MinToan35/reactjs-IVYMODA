import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';
const Header = () => {
    return (
        <div>
            <nav className='header'>
                <ul className='header-container-left'>
                    <li className='header-item nu'>NỮ
                        <ul className='sub-menu'>
                            <ul className='sub-menu-colum'>
                                <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/hang-nu-moi-ve'>Hàng nữ mới về</NavLink></li>
                                <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/mo-nhuom-nang'>Mơ Nhuộm Nắng</NavLink></li>
                                <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/Elevated-Simplicity'>Elevated Simplicity</NavLink></li>
                                <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/spring-love'>Spring Love</NavLink></li>
                                <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/Clearance-sale-ivy-moda'>SS2021 Clearance Sale</NavLink></li>
                            </ul>
                            <ul className='sub-menu-colum'>
                                <li className='sub-menu-colum-name'>ÁO
                                    <ul className='sub-menu-colum-item'>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/ao-thun-nu'>Áo thun</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/ao-so-mi-nu'>Áo sơ mi</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/ao-peplum-nu'>Áo Peplum</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/ao-kieu-nu'>Áo kiểu</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/ao-croptop-nu'>Áo Croptop</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/ao-len-nu'>Áo len</NavLink></li>
                                    </ul>
                                </li>
                                <li className='sub-menu-colum-name'>PHỤ KIỆN
                                    <ul className='sub-menu-colum-item'>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/phu-kien-nu'>Phụ kiện</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/tui-nu'>Túi/Ví</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className='sub-menu-colum'>
                                <li className='sub-menu-colum-name'>ÁO KHOÁC
                                    <ul className='sub-menu-colum-item'>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/ao-khoac-nu'>Áo khoác</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/ao-khoac-nu'>Áo blazer</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/ao-khoac-nu'>Áo dạ</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/ao-khoac-nu'>Áo vest</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/ao-khoac-nu'>Áo măng tô</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className='sub-menu-colum'>
                                <li className='sub-menu-colum-name'>QUẦN & JUMPSUIT
                                    <ul className='sub-menu-colum-item'>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/quan-jeans-nu'>Quần jeans</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/quan-dai-nu'>Quần dài</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/quan-lung-nu'>Quần lửng/short</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/jumpsuit-nu'>Jumpsuit</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className='sub-menu-colum'>
                                <li className='sub-menu-colum-name'>CHÂN VÁY
                                    <ul className='sub-menu-colum-item'>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/chan-vay'>Chân váy</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/chan-vay-xep-ly'>Chân váy xếp li</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/chan-vay-chu-A'>Chân váy chữ A</NavLink></li>
                                        
                                    </ul>
                                </li>
                            </ul>
                            <ul className='sub-menu-colum'>
                                <li className='sub-menu-colum-name'>ĐẦM
                                    <ul className='sub-menu-colum-item'>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/dam'>Đầm</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/dam-maxi'>Đầm maxi/voan</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/dam-thun'>Đầm thun</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/senora-nu'>Senora - Đầm dạ hội</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className='sub-menu-colum'>
                                <li className='sub-menu-colum-name'>ĐỒ LÓT
                                    <ul className='sub-menu-colum-item'>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/do-lot-nu'>Đồ lót</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/ao-bra'>Áo bra</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/quan-lot'>Quần lót</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/pyjama'>Pyjama</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/do-boi-nu'>Bikini</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className='sub-menu-colum'>
                                <li className='sub-menu-colum-name'>GIÀY & DÉP
                                    <ul className='sub-menu-colum-item'>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/giay-nu'>Giày</NavLink></li>
                                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/giay-cao-got'>Giày cao gót/Boot</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </ul>
                    </li>
                    
                    <li className='header-item nam'>NAM
                    <ul className='sub-menu nam'>
                    <ul className='sub-menu-colum'>
                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/hang-nam-moi-ve'>Hàng nam mới về</NavLink></li>
                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/essential-sweatsuit-men'>Essential Sweatsuit men</NavLink></li>
                        <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/Clearance-sale-ivy-men'>SS2021 Clearance Sale</NavLink></li>
                    </ul>
                    <ul className='sub-menu-colum'>
                        <li className='sub-menu-colum-name'>ÁO
                            <ul className='sub-menu-colum-item'>
                                <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/ao-thun-nam'>Áo thun</NavLink></li>
                                <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/ao-polo-nam'>Áo polo</NavLink></li>
                                <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/ao-so-mi-nam'>Áo sơ mi</NavLink></li>
                                <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/ao-len-nam'>Áo len</NavLink></li>
                                
                            </ul>
                        </li>
    
                    </ul>
                    <ul className='sub-menu-colum'>
                        <li className='sub-menu-colum-name'>ÁO KHOÁC
                            <ul className='sub-menu-colum-item'>
                                <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/ao-vest-nam'>Áo vest</NavLink></li>
                                <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/ao-khoac-nam'>Áo khoác</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className='sub-menu-colum'>
                        <li className='sub-menu-colum-name'>QUẦN 
                            <ul className='sub-menu-colum-item'>
                                <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/quan-jeans-nam'>Quần jeans</NavLink></li>
                                <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/quan-lung-nam'>Quần lửng/short</NavLink></li>
                                <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/quan-dai-nam'>Quần dài</NavLink></li>
                                <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/quan-khaki-nam'>Quần khaki</NavLink></li>
                                <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/quan-tay-nam'>Quần tây</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    
                    <ul className='sub-menu-colum'>
                        <li className='sub-menu-colum-name'>GIÀY & DÉP
                            <ul className='sub-menu-colum-item'>
                                <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/giay-nam'>Giày/Dép</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className='sub-menu-colum'>
                        <li className='sub-menu-colum-name'>PHỤ KIỆN
                            <ul className='sub-menu-colum-item'>
                                <li className='sub-menu-item'><NavLink className='sub-menu-item-link' to = '/danh-muc/phu-kien-nam'>Phụ kiện</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </ul>
                    </li>
                    <li className='header-item'>TRẺ EM</li>
                    <li className='header-item'>ƯU ĐÃI THÁNG 5</li>
                    <li className='header-item'>BỘ SƯU TẬP</li>
                    <li className='header-item'>LIFESTYLE</li>
                    <li className='header-item'>VỀ CHÚNG TÔI</li>
                </ul>
                <img className='logo' src='/images/logo.png' alt=''/>
                <ul className='header-container-right'>
                    <i className='fas fa-search'></i><input type='text' className='search' placeholder='TÌM KIẾM SẢN PHẨM'></input>
                    <i className='fas fa-headphones'></i>
                    <i className='fas fa-user'></i>
                    <i className='fas fa-shopping-bag'></i>
                </ul>
            </nav>
        </div>
    );
};

export default Header;