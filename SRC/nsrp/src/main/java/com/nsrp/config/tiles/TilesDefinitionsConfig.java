package com.nsrp.config.tiles;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.tiles.Attribute;
import org.apache.tiles.Definition;
import org.apache.tiles.definition.DefinitionsFactory;
import org.apache.tiles.request.Request;
import org.apache.tiles.util.WildcardHelper;

/**
 * 타일즈 설정.
 */
public class TilesDefinitionsConfig implements DefinitionsFactory {
    /** 타일즈 설정을 담을 맵. */
    private static final Map<String, Definition> TILES_DEFINITIONS = new LinkedHashMap<>();

    /** 메인 템플릿. */
    private static final Attribute MAIN_TEMPLATE = new Attribute("/WEB-INF/views/home/layout/mainTemplate.jsp");

    /** 모바일 메인 템플릿. */
    private static final Attribute MOBILE_MAIN_TEMPLATE = new Attribute("/WEB-INF/views/home/layout/mMainTemplate.jsp");

    /** 모바일 EBOOK 템플릿. */
    private static final Attribute MOBILE_EBOOK_TEMPLATE = new Attribute("/WEB-INF/views/home/layout/mEbookTemplate.jsp");

    /** 서브 템플릿. */
    private static final Attribute SUB_TEMPLATE = new Attribute("/WEB-INF/views/home/layout/subTemplate.jsp");

    /** 공백 템플릿. */
    private static final Attribute BLANK_TEMPLATE = new Attribute("/WEB-INF/views/home/layout/blankTemplate.jsp");

    /** 협정기관PC등록 템플릿 */
    private static final Attribute COOP_BASE_TEMPLATE = new Attribute("/WEB-INF/views/svp/coop/layouts/coopBaseFrame.jsp");
    private static final Attribute COOP_TEMPLATE = new Attribute("/WEB-INF/views/svp/coop//layouts/coopFrame.jsp");
    private static final Attribute COOP_POPUP_TEMPLATE = new Attribute("/WEB-INF/views/svp/coop/layouts/coopPopupFrame.jsp");

    /** "*"처리를 위한 헬퍼. */
    private final WildcardHelper wildcardHelper = new WildcardHelper();

    /* (non-Javadoc)
     * @see org.apache.tiles.definition.DefinitionsFactory#getDefinition(java.lang.String, org.apache.tiles.request.Request)
     */
    @Override
    public Definition getDefinition(String name, Request tilesContext) {

        if(TILES_DEFINITIONS.containsKey(name)) {
            TILES_DEFINITIONS.get(name);
        } else {
            for (final Map.Entry<String, Definition> item : TILES_DEFINITIONS.entrySet()) {
                final int[] pattern = wildcardHelper.compilePattern(item.getKey());
                final List<String> list = wildcardHelper.match(name, pattern);
                if (list != null) {
                    final Definition retVal = new Definition(item.getValue());
                    final Map<Integer, String> vars = new HashMap<>();
                    for (final String layout : list) {
                        vars.put(vars.size(), layout);
                    }

                    final String contentAttr = (String) retVal.getAttribute("contents").getValue();
                    final String contents = WildcardHelper.convertParam(contentAttr, vars);

                    retVal.setName(name);
                    retVal.putAttribute("contents", new Attribute(contents));

                    TILES_DEFINITIONS.put(name, retVal);

                    break;
                }
            }
        }

        return TILES_DEFINITIONS.get(name);
    }

    /**
     * 메인 템플릿.
     *
     * @param name the name
     * @param body the body
     */
    private static void addMainLayoutDef(String name,String body) {
        final Map<String, Attribute> attributes = new HashMap<>();
        attributes.put("header",   new Attribute("/WEB-INF/views/home/layout/mainHeader.jsp"));
        attributes.put("contents", new Attribute(body));
        attributes.put("footer",   new Attribute("/WEB-INF/views/home/layout/mainFooter.jsp"));
        TILES_DEFINITIONS.put(name, new Definition(name, MAIN_TEMPLATE, attributes));
    }

    /**
     * 모바일 메인 템플릿.
     *
     * @param name the name
     * @param body the body
     */
    private static void addMobileMainLayoutDef(String name,String body) {
        final Map<String, Attribute> attributes = new HashMap<>();
        attributes.put("header",   new Attribute("/WEB-INF/views/home/layout/mobile/mainHeader.jsp"));
        attributes.put("contents", new Attribute(body));
        attributes.put("footer",   new Attribute("/WEB-INF/views/home/layout/mainFooter.jsp"));
        TILES_DEFINITIONS.put(name, new Definition(name, MOBILE_MAIN_TEMPLATE, attributes));
    }

    /**
     * 서브 내부 템플릿.
     *
     * @param name the name
     * @param body the body
     */
    private static void addSubInnerLayoutDef(String name, String body) {
        final Map<String, Attribute> attributes = new HashMap<>();
        attributes.put("header",     new Attribute("/WEB-INF/views/home/layout/mainHeader.jsp"));
        attributes.put("contents",   new Attribute(body));
        attributes.put("footer",     new Attribute("/WEB-INF/views/home/layout/mainFooter.jsp"));

        TILES_DEFINITIONS.put(name, new Definition(name, SUB_TEMPLATE, attributes));
    }


    /**
     * 지능형질의응답 템플릿.
     *
     * @param name the name
     * @param body the body
     */
    private static void addQasLayoutDef(String name, String body) {
        final Map<String, Attribute> attributes = new HashMap<>();
        attributes.put("header",     new Attribute("/WEB-INF/views/home/layout/qasHeader.jsp"));
        attributes.put("contents",   new Attribute(body));
        attributes.put("footer",     new Attribute("/WEB-INF/views/home/layout/subFooter.jsp"));

        TILES_DEFINITIONS.put(name, new Definition(name, SUB_TEMPLATE, attributes));
    }


    /**
     * 모바일 eBook 템플릿.
     *
     * @param name the name
     * @param body the body
     */
    private static void addMobileEbookLayoutDef(String name, String body) {
        final Map<String, Attribute> attributes = new HashMap<>();
        attributes.put("header",     new Attribute("/WEB-INF/views/home/layout/mobile/eBookHeader.jsp"));
        attributes.put("contents",   new Attribute(body));

        TILES_DEFINITIONS.put(name, new Definition(name, MOBILE_EBOOK_TEMPLATE, attributes));
    }


    /**
     * 공백 템플릿.
     *
     * @param name the name
     * @param body the body
     */
    private static void addBlankLayoutDef(String name, String body) {
        final Map<String, Attribute> attributes = new HashMap<>();
        attributes.put("contents", new Attribute(body));
        TILES_DEFINITIONS.put(name, new Definition(name, BLANK_TEMPLATE, attributes));
    }

    private static void addDownloadLayoutDef(String name, String tempate) {
        TILES_DEFINITIONS.put(name, new Definition(name, new Attribute(tempate), null));
    }

    /**
     * 협정기관검색PC 등록시스템
     *
     * @param name the name
     * @param body the body
     */
    private static void addCoopBaseLayoutDef(String name, String body) {
        final Map<String, Attribute> attributes = new HashMap<>();
        attributes.put("contents",   new Attribute(body));
        TILES_DEFINITIONS.put(name, new Definition(name, COOP_BASE_TEMPLATE, attributes));
    }
    private static void addCoopLayoutDef(String name, String body) {
        final Map<String, Attribute> attributes = new HashMap<>();
        attributes.put("top",     new Attribute("/WEB-INF/views/svp/coop/layouts/coopTop.jsp"));
        attributes.put("contents",   new Attribute(body));
        TILES_DEFINITIONS.put(name, new Definition(name, COOP_TEMPLATE, attributes));
    }
    private static void addCoopPopupLayoutDef(String name, String body) {
        final Map<String, Attribute> attributes = new HashMap<>();
        attributes.put("contents",   new Attribute(body));
        TILES_DEFINITIONS.put(name, new Definition(name, COOP_POPUP_TEMPLATE, attributes));
    }

    /**
     * <code>Add Apache tiles definitions</code>.
     */
    public static void addDefinitions() {
    	// 메인
    	addMainLayoutDef("home/main", "/WEB-INF/views/home/main.jsp");
    	// 모바일 메인
    	addMobileMainLayoutDef("home/mMain", "/WEB-INF/views/home/mMain.jsp");
    	// 모바일 eBook
    	addMobileEbookLayoutDef("svp/ebook/*", "/WEB-INF/views/svp/ebook/{1}.jsp");
    	// 공통ERROR 페이지
    	addBlankLayoutDef("common/error/*", "/WEB-INF/views/common/error/{1}.jsp");

    	//지능형질의응답 - 20210823 KHJ
    	addQasLayoutDef("svp/qas/*", "/WEB-INF/views/svp/qas/{1}.jsp");

    	// 서브
    	addSubInnerLayoutDef("*/*/*", "/WEB-INF/views/{1}/{2}/{3}.jsp");
    	addSubInnerLayoutDef("*/*", "/WEB-INF/views/{1}/{2}.jsp");
    	// download
    	addDownloadLayoutDef("common/download",      "/WEB-INF/views/common/download.jsp");
    	addDownloadLayoutDef("common/activexUpdate", "/WEB-INF/views/common/activexUpdate.jsp");

    	//열람신청 팝업
    	addBlankLayoutDef("loan/popup/loanAssembyPrintPopup",   "/WEB-INF/views/loan/popup/loanAssembyPrintPopup.jsp");
    	addBlankLayoutDef("loan/popup/loanManagerPrintPopup",   "/WEB-INF/views/loan/popup/loanManagerPrintPopup.jsp");
    	addBlankLayoutDef("loan/popup/loanSerlVolumnListPopup", "/WEB-INF/views/loan/popup/loanSerlVolumnListPopup.jsp");
    	addBlankLayoutDef("loan/popup/loanEmptyPrintPopup", "/WEB-INF/views/loan/popup/loanEmptyPrintPopup.jsp");

    	addBlankLayoutDef("search/service/resultHandler", "/WEB-INF/views/search/service/resultHandler.jsp");
    	addBlankLayoutDef("*/*/popup/*", "/WEB-INF/views/{1}/{2}/popup/{3}.jsp");

    	//협정기관 PC관리
    	addCoopLayoutDef("svp/coop/mng/*", "/WEB-INF/views/svp/coop/mng/{1}.jsp");
    	addCoopLayoutDef("svp/coop/feelog/*/*", "/WEB-INF/views/svp/coop/feelog/{1}/{2}.jsp");
    	addCoopBaseLayoutDef("svp/coop/mng/LoginCoop", "/WEB-INF/views/svp/coop/mng/LoginMg.jsp");
    	addCoopPopupLayoutDef("svp/coop/mng/IDSearch", "/WEB-INF/views/svp/coop/mng/IDSearch.jsp");
    	addBlankLayoutDef("svp/coop/feelog/output/ViewfeelogCalendarPrintPopup", "/WEB-INF/views/svp/coop/feelog/output/ViewfeelogCalendarPrintPopup.jsp");
    	addBlankLayoutDef("svp/coop/feelog/output/ViewfeelogYearlyListPrintPopup", "/WEB-INF/views/svp/coop/feelog/output/ViewfeelogYearlyListPrintPopup.jsp");
    	addBlankLayoutDef("Excel", "/WEB-INF/views/svp/coop/mng/excel.jsp");
    	//addBlankLayoutDef("home/nsp/test/searchDetail", "/WEB-INF/views/home/nsp/searchDetail.jsp");
    	//addBlankLayoutDef("home/nsp/empty", "/WEB-INF/views/home/nsp/empty.jsp");
    	//addBlankLayoutDef("temp/*/*/*", "/WEB-INF/views/{1}/{2}/{3}.jsp");

    }
}