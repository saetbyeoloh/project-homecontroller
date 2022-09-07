package com.bootreact.hmct.service.cart;

import java.util.List;
import java.util.Map;

import com.bootreact.hmct.entity.Cart;

public interface CartService {
	List<Cart> getCartList(String userId);
	
//	List<Map<String, Object>> getCartMapList(String userId);

	void deleteCart(String userId, String productNo, String commonCode);

	void addCart(String userId, String productNo, String commonCode);

	void updateCart(String userId, String productNo, String commonCode, String productCount);
}
