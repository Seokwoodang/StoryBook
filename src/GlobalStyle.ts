import { createGlobalStyle } from "styled-components";
import semanticColor from "./stories/Foundation/Colors";

const semantic = semanticColor;

const GlobalStyle = createGlobalStyle`
    :root{
        --text_primary:${semantic.color_text_primary};
        --text_secondary:${semantic.color_text_secondary};
        --text_tertiary:${semantic.color_text_tertiary};
        --text_quaternary:${semantic.color_text_quaternary};
        --text_info:${semantic.color_text_info};
        --text_info_bold:${semantic.color_text_info_bold};
        --text_warning:${semantic.color_text_warning};
        --text_warning_bold:${semantic.color_text_warning_bold};
        --text_success:${semantic.color_text_success};
        --text_success_strong:${semantic.color_text_success_strong};
        --text_danger:${semantic.color_text_danger};
        --text_danger_strong:${semantic.color_text_danger_strong};
        --text_danger_disabled:${semantic.color_text_danger_disabled};
        --text_interactive_primary:${semantic.color_text_interactive_primary};
        --text_interactive_primary_hover:${semantic.color_text_interactive_primary_hover};
        --text_interactive_primary_actived:${semantic.color_text_interactive_primary_actived};
        --text_interactive_secondary:${semantic.color_text_interactive_secondary};
        --text_interactive_secondary_hover:${semantic.color_text_interactive_secondary_hover};
        --text_interactive_secondary_actived:${semantic.color_text_interactive_secondary_actived};
        --text_interactive_selected:${semantic.color_text_interactive_selected};
        --text_interactive_inversed:${semantic.color_text_interactive_inversed};
        --text_interactive_visited:${semantic.color_text_interactive_visited};
        --bg_primary:${semantic.color_bg_primary};
        --bg_secondary:${semantic.color_bg_secondary};
        --bg_tertiary:${semantic.color_bg_tertiary};
        --bg_info_subtle:${semantic.color_bg_info_subtle};
        --bg_info:${semantic.color_bg_info};
        --bg_warning_subtle:${semantic.color_bg_warning_subtle};
        --bg_warning:${semantic.color_bg_warning};
        --bg_success_subtle:${semantic.color_bg_success_subtle};
        --bg_success:${semantic.color_bg_success};
        --bg_danger_subtle:${semantic.color_bg_danger_subtle};
        --bg_danger:${semantic.color_bg_danger};
        --bg_disabled:${semantic.color_bg_disabled};
        --hello:'red';
        --bg_interactive_primary:${semantic.color_bg_interactive_primary};
        --bg_interactive_primary_hover:${semantic.color_bg_interactive_primary_hover};
        --bg_interactive_primary_actived:${semantic.color_bg_interactive_primary_actived};
        --bg_interactive_secondary:${semantic.color_bg_interactive_secondary};
        --bg_interactive_secondary_hover:${semantic.color_bg_interactive_secondary_hover};
        --bg_interactive_secondary_actived:${semantic.color_bg_interactive_secondary_actived};
        --bg_interactive_tertiary:${semantic.color_bg_interactive_tertiary};
        --bg_interactive_tertiary_hover:${semantic.color_bg_interactive_tertiary_hover};
        --bg_interactive_tertiary_actived:${semantic.color_bg_interactive_tertiary_actived};
        --bg_interactive_selected:${semantic.color_bg_interactive_selected};
        --bg_interactive_selected_hover:${semantic.color_bg_interactive_selected_hover};
        --bg_interactive_selected_actived:${semantic.color_bg_interactive_selected_actived};
        --bg_interactive_delete:${semantic.color_bg_interactive_delete};
        --bg_interactive_delete_hover:${semantic.color_bg_interactive_delete_hover};
        --bg_interactive_delete_actived:${semantic.color_bg_interactive_delete_actived};
        --bg_interactive_delete_subtle:${semantic.color_bg_interactive_delete_subtle};
        --bg_interactive_delete_hover_subtle:${semantic.color_bg_interactive_delete_hover_subtle};
        --bg_interactive_delete_subtle_actived:${semantic.color_bg_interactive_delete_subtle_actived};
        --bg_interactive_disabled:${semantic.color_bg_interactive_disabled};
        --bg_interactive_inversed_hover:${semantic.color_bg_interactive_inversed_hover};
        --bg_interactive_inversed_actived:${semantic.color_bg_interactive_inversed_actived};
        --border_primary:${semantic.color_border_primary};
        --border_secondary:${semantic.color_border_secondary};
        --border_tertiary:${semantic.color_border_tertiary};
        --border_quaternary:${semantic.color_border_quaternary};
        --border_focusing:${semantic.color_border_focusing};
        --border_info:${semantic.color_border_info};
        --border_info_subtle:${semantic.color_border_info_subtle};
        --border_warning:${semantic.color_border_warning};
        --border_warning_subtle:${semantic.color_border_warning_subtle};
        --border_success:${semantic.color_border_success};
        --border_success_subtle:${semantic.color_border_success_subtle};
        --border_danger:${semantic.color_border_danger};
        --border_danger_subtle:${semantic.color_border_danger_subtle};
        --border_disabled:${semantic.color_border_disabled};
        --border_interactive_primary:${semantic.color_border_interactive_primary};
        --border_interactive_primary_hover:${semantic.color_border_interactive_primary_hover};
        --border_interactive_primary_actived:${semantic.color_border_interactive_primary_actived};
        --border_interactive_secondary:${semantic.color_border_interactive_secondary};
        --border_interactive_secondary_hover:${semantic.color_border_interactive_secondary_hover};
        --border_interactive_secondary_actived:${semantic.color_border_interactive_secondary_actived};
        --border_interactive_selected:${semantic.color_border_interactive_selected};
        --border_interactive_selected_hover:${semantic.color_border_interactive_selected_hover};
        --border_interactive_selected_actived:${semantic.color_border_interactive_selected_actived};
        --border_interactive_delete:${semantic.color_border_interactive_delete};
        --border_interactive_delete_hover:${semantic.color_border_interactive_delete_hover};
        --border_interactive_delete_actived:${semantic.color_border_interactive_delete_actived};
        --icon_primary:${semantic.color_icon_primary};
        --icon_secondary:${semantic.color_icon_secondary};
        --icon_info:${semantic.color_icon_info};
        --icon_info_bold:${semantic.color_icon_info_bold};
        --icon_warning:${semantic.color_icon_warning};
        --icon_warning_bold:${semantic.color_icon_warning_bold};
        --icon_success:${semantic.color_icon_success};
        --icon_success_bold:${semantic.color_icon_success_bold};
        --icon_danger:${semantic.color_icon_danger};
        --icon_danger_bold:${semantic.color_icon_danger_bold};
        --icon_disabled:${semantic.color_icon_disabled};
        --icon_inversed:${semantic.color_icon_inversed};
        --icon_selected:${semantic.color_icon_selected};
    }
    html{
        -ms-touch-action: manipulation;
        touch-action: manipulation;
    }
    body{
        font-family: 'Regular';
        font-size: 16px;
        -webkit-overflow-scrolling : touch !important;
        
    }
    input{
        -webkit-border-radius: 0;
    }
`;

export default GlobalStyle;
