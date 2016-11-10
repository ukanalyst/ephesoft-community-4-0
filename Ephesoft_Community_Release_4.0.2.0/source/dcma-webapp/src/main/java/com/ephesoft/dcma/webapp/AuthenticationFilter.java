/********************************************************************************* 
* Ephesoft is a Intelligent Document Capture and Mailroom Automation program 
* developed by Ephesoft, Inc. Copyright (C) 2015 Ephesoft Inc. 
* 
* This program is free software; you can redistribute it and/or modify it under 
* the terms of the GNU Affero General Public License version 3 as published by the 
* Free Software Foundation with the addition of the following permission added 
* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK 
* IN WHICH THE COPYRIGHT IS OWNED BY EPHESOFT, EPHESOFT DISCLAIMS THE WARRANTY 
* OF NON INFRINGEMENT OF THIRD PARTY RIGHTS. 
* 
* This program is distributed in the hope that it will be useful, but WITHOUT 
* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS 
* FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more 
* details. 
* 
* You should have received a copy of the GNU Affero General Public License along with 
* this program; if not, see http://www.gnu.org/licenses or write to the Free 
* Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 
* 02110-1301 USA. 
* 
* You can contact Ephesoft, Inc. headquarters at 111 Academy Way, 
* Irvine, CA 92617, USA. or at email address info@ephesoft.com. 
* 
* The interactive user interfaces in modified source and object code versions 
* of this program must display Appropriate Legal Notices, as required under 
* Section 5 of the GNU Affero General Public License version 3. 
* 
* In accordance with Section 7(b) of the GNU Affero General Public License version 3, 
* these Appropriate Legal Notices must retain the display of the "Ephesoft" logo. 
* If the display of the logo is not reasonably feasible for 
* technical reasons, the Appropriate Legal Notices must display the words 
* "Powered by Ephesoft". 
********************************************************************************/ 

package com.ephesoft.dcma.webapp;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import com.ephesoft.dcma.batch.service.EphesoftContext;
import com.ephesoft.dcma.core.common.AuthenticationType;
import com.ephesoft.dcma.security.AuthenticatorFactory;
import com.ephesoft.dcma.security.service.AuthenticationService;
import com.ephesoft.dcma.util.logger.EphesoftLogger;
import com.ephesoft.dcma.util.logger.EphesoftLoggerFactory;

/**
* Filters all the given request and fetch the user details.
* 
* @author  Ephesoft
* 
* <b>created on</b>  19-Nov-2013 <br/>
* @version 1.0
* $LastChangedDate:$ <br/>
* $LastChangedRevision:$ <br/>
*/
public class AuthenticationFilter implements Filter {

	/**
	 * Filter configuration object used to get initialisation parameters
	 */
	private static FilterConfig filterConfig = null;
	
	/**
	 * Logger of <code>AuthenticationFilter</code> class
	 */
	private static final EphesoftLogger LOGGER = EphesoftLoggerFactory.getLogger(AuthenticationFilter.class);
	
	/**
	 * To hold the instance of authentication service to save user details.
	 */
	private static AuthenticationService authenticationService;

	@Override
	public void doFilter(ServletRequest req, ServletResponse resp, FilterChain filterChain) throws IOException, ServletException {
		LOGGER.debug("Filtering incoming request.");
		HttpServletRequest httpReq = (HttpServletRequest) req;
		authenticationService.setUserDetails(httpReq, filterConfig);
		filterChain.doFilter(req, resp);
	}

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		AuthenticationFilter.filterConfig = filterConfig;
		final AuthenticationType authenticationType = EphesoftContext.getCurrent().getAuthenticationType();
		authenticationService = AuthenticatorFactory.getAuthenticator(authenticationType);
	}

	@Override
	public void destroy() {
		// Do nothing
	}

}
