package com.nsrp.config;

import com.google.gson.Gson;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class WebMvcConfig implements WebMvcConfigurer {


	@Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }


    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
    }
    
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
	
    }
    
    @Bean
    public WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> enableDefaultServlet() {
        return (factory) -> factory.setRegisterDefaultServlet(true);
    }

    @Bean(name="gson")
   	public Gson gson() {
   		Gson gson = new Gson();
   		return gson;
   	}
    
    
    /** 다국어 환경 설정 */
    @Bean
    public ReloadableResourceBundleMessageSource setMessageSource() {
    	ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
    	messageSource.setBasename("/WEB-INF/messages/message");
    	messageSource.setDefaultEncoding("UTF-8");
    	messageSource.setCacheSeconds(60);
    	
    	return messageSource;
    }
    
    @Bean
    public MessageSourceAccessor getMessageSourceAccessor() {
    	MessageSourceAccessor accessor = new MessageSourceAccessor(setMessageSource());
    	return accessor;
    }
}
