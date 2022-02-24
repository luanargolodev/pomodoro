import ReactSlider from "react-slider";
import SettingsContext from "./SettingsContext";
import { useContext } from "react";
import BackButton from "./BackButton";

function Settings() {
  const settingsInfo = useContext(SettingsContext);

  return (
    <div className="settings-page">
      <label>Trabalho: {settingsInfo.workMinutes} minutos</label>
      <ReactSlider
        className="settings-page-slider"
        thumbClassName="thumb-page-slider"
        trackClassName="track-page-slider"
        value={settingsInfo.workMinutes}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>Descanso: {settingsInfo.breakMinutes} minutos</label>
      <ReactSlider
        className="settings-page-slider green"
        thumbClassName="thumb-page-slider"
        trackClassName="track-page-slider"
        value={settingsInfo.breakMinutes}
        onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div className="back-button">
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </div>
  );
}

export default Settings;
