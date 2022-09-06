package com.bootreact.hmct.service.product;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bootreact.hmct.entity.Product;
import com.bootreact.hmct.entity.ProductImage;
import com.bootreact.hmct.entity.ProductOption;
import com.bootreact.hmct.entity.Showroom;


@Service
public interface ProductService {
	List<Product> getProductList();
	
	int insertProduct(Product product);
	
	void insertProductFiles(List<ProductImage> fileList);
	
	void insertProductOption(ProductOption productOption);
	
//	void deleteProduct(Product product);

	void updateProduct(Product product);
	
	Product findbyProductNo(int productNo);
	
	int insertShowroom (Showroom showroom);
	
	void insertShowroomFiles(List<Showroom> showroomFileList);
	
	Showroom findbyShowroomNo (int showroomNo);

	void deleteProduct(Product product);

}
