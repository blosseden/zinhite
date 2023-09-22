package com.nsrp.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Configuration;

import java.util.Locale;


@Configuration
public class ErrorMessage {

	private static final String PREFIX = "error.";
	private static final String DEFAULT_MSG = "wtf";

	@Autowired
	private MessageSource messageSource;


	public String getMsg(int code) {
		
		String ret = DEFAULT_MSG;

		try {

			ret = messageSource.getMessage(PREFIX + code, null, Locale.getDefault());
			if (ret == null) {
				ret = DEFAULT_MSG;
			}

		} catch (Exception ex) {
			ret = DEFAULT_MSG;
		}

		return ret;
	}
}