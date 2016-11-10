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

package com.ephesoft.gxt.core.client.ui.service.columnConfig.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.ephesoft.gxt.core.client.i18n.BatchClassConstants;
import com.ephesoft.gxt.core.client.i18n.CoreCommonConstants;
import com.ephesoft.gxt.core.client.i18n.LocaleDictionary;
import com.ephesoft.gxt.core.client.ui.service.columnConfig.ColumnConfigService;
import com.ephesoft.gxt.core.shared.dto.RegexPatternDTO;
import com.ephesoft.gxt.core.shared.dto.propertyAccessors.RegexPatternProperties;
import com.google.gwt.core.client.GWT;
import com.sencha.gxt.data.shared.ModelKeyProvider;
import com.sencha.gxt.widget.core.client.form.IsField;
import com.sencha.gxt.widget.core.client.grid.ColumnConfig;
import com.sencha.gxt.widget.core.client.grid.filters.Filter;

public class RegerPatternButtonColumnConfigService implements ColumnConfigService<RegexPatternDTO> {

	private static final RegexPatternProperties properties = GWT.create(RegexPatternProperties.class);
	private List<ColumnConfig<RegexPatternDTO, ?>> columnConfigList;
	private Map<ColumnConfig, IsField> editorsMap;

	public RegerPatternButtonColumnConfigService() {
		columnConfigList = new ArrayList<ColumnConfig<RegexPatternDTO, ?>>();
		editorsMap = new HashMap<ColumnConfig, IsField>();

		// ColumnConfig<RegexPatternDTO, Boolean> modelSelector = new ColumnConfig<RegexPatternDTO, Boolean>(properties.selected());
		//
		// CheckBoxCell modelSelectionCell = new CheckBoxCell();
		// modelSelector.setCell(modelSelectionCell);
		// // modelSelector.setHeader("Select");
		// CheckBox checkbox = new CheckBox();
		// checkbox.getElement().getStyle().setZIndex(1000);
		// modelSelector.setHeader(SafeHtmlUtils.fromSafeConstant(checkbox.getElement().getInnerHTML()));
		// modelSelector.setWidth(30);
		// modelSelector.setFixed(true);
		// modelSelector.setSortable(false);
		// modelSelector.setHideable(false);

		ColumnConfig<RegexPatternDTO, String> regexPattern = new ColumnConfig<RegexPatternDTO, String>(properties.pattern());
		regexPattern.setHeader(LocaleDictionary.getConstantValue(CoreCommonConstants.REGEX_PATTERN_BUTTON_GRID));
		regexPattern.setHideable(false);

		ColumnConfig<RegexPatternDTO, String> regexPatternDescription = new ColumnConfig<RegexPatternDTO, String>(
				properties.description());
		regexPatternDescription.setHeader(LocaleDictionary.getConstantValue(CoreCommonConstants.REGEX_PATTERN_BUTTON_GRID_DECRIPTION_HEADER));
		regexPatternDescription.setHideable(false);

		// ColumnConfig<RegexPatternDTO, Double> progressCell = new ColumnConfig<RegexPatternDTO, Double>(
		// properties.progress());
		// ProgressBarCell modelProgressCell = new ProgressBarCell();
		// modelProgressCell.setProgressText("{0}%");
		// modelProgressCell.setWidth(progressCell.getWidth());
		// progressCell.setCell(modelProgressCell);
		// progressCell.setHeader("Progress");
		// progressCell.setSortable(false);

		// columnConfigList.add(modelSelector);
		columnConfigList.add(regexPattern);
		columnConfigList.add(regexPatternDescription);
		// columnConfigList.add(progressCell);

		// editorsMap.put(regexPattern, new TextField());
		// editorsMap.put(regexPatternDescription, new TextField());
	}

	@Override
	public <V> List<ColumnConfig<RegexPatternDTO, ?>> getColumnConfig() {
		return columnConfigList;
	}

	@Override
	public Map<ColumnConfig, IsField> getEditorsMap() {
		return editorsMap;
	}

	@Override
	public ModelKeyProvider<RegexPatternDTO> getKeyProvider() {
		return properties.identifier();
	}

	@Override
	public List<Filter<RegexPatternDTO, ?>> getFilters() {
		return null;
	}

}
